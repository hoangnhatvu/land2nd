import {
    useCallback,
    useEffect,
    useRef,
    DependencyList,
    useState,
    useReducer,
    Reducer
} from 'react';

type UseDebounceReturn = [() => boolean | null, () => void];
type UseTimeoutFnReturn = [() => boolean | null, () => void, () => void];
type AsyncState<T> =
    | {
          loading: boolean;
          error?: undefined;
          value?: undefined;
      }
    | {
          loading: true;
          error?: Error | undefined;
          value?: T;
      }
    | {
          loading: false;
          error: Error;
          value?: undefined;
      }
    | {
          loading: false;
          error?: undefined;
          value: T;
      };
type FunctionReturningPromise = (...args: any[]) => Promise<any>;
type AsyncFnReturn<
    T extends FunctionReturningPromise = FunctionReturningPromise
> = [StateFromFunctionReturningPromise<T>, T];
type PromiseType<P extends Promise<any>> = P extends Promise<infer T>
    ? T
    : never;
type StateFromFunctionReturningPromise<T extends FunctionReturningPromise> =
    AsyncState<PromiseType<ReturnType<T>>>;

function useMountedState(): () => boolean {
    const mountedRef = useRef<boolean>(false);
    const get = useCallback(() => mountedRef.current, []);
    useEffect(() => {
        mountedRef.current = true;
        return () => {
            mountedRef.current = false;
        };
    }, []);
    return get;
}

function useAsyncFn<T extends FunctionReturningPromise>(
    fn: T,
    deps: DependencyList = [],
    initialState: StateFromFunctionReturningPromise<T> = { loading: false }
): AsyncFnReturn<T> {
    const lastCallId = useRef(0);
    const isMounted = useMountedState();
    const [state, set] =
        useState<StateFromFunctionReturningPromise<T>>(initialState);
    const callback = useCallback((...args: Parameters<T>): ReturnType<T> => {
        const callId = ++lastCallId.current;
        if (!state.loading) {
            set((prevState) => ({ ...prevState, loading: true }));
        }
        return fn(...args).then(
            (value) => {
                isMounted() &&
                    callId === lastCallId.current &&
                    set({ value, loading: false });
                return value;
            },
            (error) => {
                isMounted() &&
                    callId === lastCallId.current &&
                    set({ error, loading: false });
                return error;
            }
        ) as ReturnType<T>;
    }, deps);
    return [state, callback as unknown as T];
}

function useAsync<T extends FunctionReturningPromise>(
    fn: T,
    deps: DependencyList = []
) {
    const [state, callback] = useAsyncFn(fn, deps, {
        loading: true
    });
    useEffect(() => {
        callback();
    }, [callback]);
    return state;
}

function useTimeoutFn(fn: Function, ms: number = 0): UseTimeoutFnReturn {
    const ready = useRef<boolean | null>(false);
    const timeout = useRef<ReturnType<typeof setTimeout>>();
    const callback = useRef(fn);
    const isReady = useCallback(() => ready.current, []);
    const set = useCallback(() => {
        ready.current = false;
        timeout.current && clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
            ready.current = true;
            callback.current();
        }, ms);
    }, [ms]);
    const clear = useCallback(() => {
        ready.current = null;
        timeout.current && clearTimeout(timeout.current);
    }, []);
    useEffect(() => {
        callback.current = fn;
    }, [fn]);
    useEffect(() => {
        set();
        return clear;
    }, [ms]);
    return [isReady, clear, set];
}

function useDebounce(
    fn: Function,
    ms: number = 0,
    deps: DependencyList = []
): UseDebounceReturn {
    const [isReady, cancel, reset] = useTimeoutFn(fn, ms);
    useEffect(reset, deps);
    return [isReady, cancel];
}

const useMount = () => {
    const ref = useRef(true);
    useEffect(() => {
        ref.current = false;
    }, []);
    return ref.current;
};

const useAsyncRetry = <T,>(fn: () => Promise<T>, deps: DependencyList = []) => {
    const [attempt, setAttempt] = useState<number>(0);
    const state = useAsync(fn, [...deps, attempt]);
    const stateLoading = state.loading;
    const retry = useCallback(() => {
        if (stateLoading) {
            return;
        }
        setAttempt((currentAttempt) => currentAttempt + 1);
    }, [...deps, stateLoading]);
    return { ...state, retry };
};

const useLatest = <T,>(value: T): { readonly current: T } => {
    const ref = useRef(value);
    ref.current = value;
    return ref;
};

function usePrevious<T>(state: T): T | undefined {
    const ref = useRef<T>();
    useEffect(() => {
        ref.current = state;
    });
    return ref.current;
}

const toggleReducer = (state: boolean, nextValue?: any) =>
    typeof nextValue === 'boolean' ? nextValue : !state;

const useToggle = (
    initialValue: boolean
): [boolean, (nextValue?: any) => void] => {
    return useReducer<Reducer<boolean, any>>(toggleReducer, initialValue);
};

function useRendersCount(): number {
    return ++useRef(0).current;
}

const useWillMount = (fn: any) => {
    const willMount = useRef(true);
    if (willMount.current && fn && typeof fn === 'function') {
        fn();
    }
    willMount.current = false;
};

export {
    useDebounce,
    useMount,
    useTimeoutFn,
    useAsync,
    useAsyncFn,
    useAsyncRetry,
    useMountedState,
    useLatest,
    usePrevious,
    useToggle,
    useRendersCount,
    useWillMount
};
