import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { forwardRef, useCallback, useRef } from "react";

const Sheet = forwardRef<
  BottomSheetModal,
  React.ComponentPropsWithoutRef<typeof BottomSheetModal>
>(
  (
    { index = 0, backgroundStyle, style, handleIndicatorStyle, ...props },
    ref
  ) => {
    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop {...props} disappearsOnIndex={-1} />
      ),
      []
    );

    return (
      <BottomSheetModal
        ref={ref}
        index={0}
        backgroundStyle={
          backgroundStyle ?? {
            backgroundColor: "#1c1c1c",
          }
        }
        style={
          style ?? {
            borderWidth: 1,
            borderColor: "#1c1c1c",
            borderTopStartRadius: 16,
            borderTopEndRadius: 16,
          }
        }
        handleIndicatorStyle={
          handleIndicatorStyle ?? {
            backgroundColor: "#fafafa",
          }
        }
        backdropComponent={renderBackdrop}
        {...props}
      />
    );
  }
);

function useSheetRef() {
  return useRef<BottomSheetModal>(null);
}

export { Sheet, useSheetRef };
