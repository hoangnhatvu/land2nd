import React from 'react';
import { StyleSheet, ViewProps } from 'react-native';
import {
    SafeAreaView,
    NativeSafeAreaViewProps
} from 'react-native-safe-area-context';
import { Colors } from '../../utils';

interface BaseViewProps extends ViewProps {
    CustomComponent?: React.ComponentType<NativeSafeAreaViewProps>;
}

const BaseView = React.memo(
    ({ CustomComponent = SafeAreaView, ...props }: BaseViewProps) => {
        const { children, style, ...rest } = props;
        return (
            <CustomComponent style={[styles.container, style]} {...rest}>
                {children}
            </CustomComponent>
        );
    }
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    }
});

export default BaseView;
