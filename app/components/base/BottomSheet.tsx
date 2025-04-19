import React, {
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  type ReactNode,
} from 'react';
import {StyleSheet, View} from 'react-native';
import uuid from 'react-native-uuid';
import {
  BottomSheetBackdrop,
  BottomSheetHandle,
  BottomSheetModal,
  type BottomSheetHandleProps,
} from '@gorhom/bottom-sheet';

export interface BottomSheetProps {
  isVisible: boolean;
  height?: string;
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  onClose?: () => void;
  stackBehavior?: 'replace' | 'push';
  handleComponent?: React.FC<BottomSheetHandleProps> | null | undefined;
}

const BottomSheet = ({
  isVisible,
  height = '90%',
  children,
  header,
  footer,
  onClose,
  stackBehavior = 'push',
  handleComponent = null,
}: BottomSheetProps) => {
  const allowPanDown = useMemo(() => !isValidElement(header), [header]);
  const isCustomHandleComponent = useMemo(
    () => isValidElement(handleComponent),
    [handleComponent],
  );

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const bottomSheetId = useMemo(() => uuid.v4(), []);
  const snapPoints = useMemo(() => [height], [height]);

  useEffect(() => {
    if (bottomSheetRef.current) {
      if (isVisible) {
        bottomSheetRef.current.present();
      } else {
        bottomSheetRef.current.close();
      }
    }
  }, [isVisible]);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        pressBehavior={'none'}
      />
    ),
    [],
  );

  return (
    <BottomSheetModal
      name={bottomSheetId}
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose={allowPanDown}
      handleComponent={
        isCustomHandleComponent
          ? handleComponent
          : allowPanDown
          ? BottomSheetHandle
          : null
      }
      keyboardBlurBehavior={'restore'}
      style={styles.bottomSheet}
      onDismiss={allowPanDown ? onClose : undefined}
      stackBehavior={stackBehavior}
      backdropComponent={renderBackdrop}
      enableOverDrag={false}
      children={
        <View style={{flex: 1}}>
          {header}
          {children}
          {isValidElement(footer) && <View>{footer}</View>}
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    borderRadius: 10,
  },
});

export default BottomSheet;
