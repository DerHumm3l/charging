import { View, ViewProps } from "react-native";
import { Text } from "./text";
import { cn } from "~/lib/utils";
import { SlottableTextProps } from "@rn-primitives/types";

type RootProps = ViewProps;
type TextProps = SlottableTextProps;

const Root = ({ children, className, ...props }: RootProps) => {
  return (
    <View
      className={cn("w-full flex flex-col items-center gap-1", className)}
      {...props}
    >
      {children}
    </View>
  );
};

const Main = ({ children, className, ...props }: TextProps) => {
  return (
    <Text
      role="heading"
      aria-level="1"
      className={cn(
        "font-bold text-2xl text-foreground text-center",
        className
      )}
      {...props}
    >
      {children}
    </Text>
  );
};

const Sub = ({ children, className, ...props }: TextProps) => {
  return (
    <Text
      role="heading"
      aria-level="2"
      className={cn("text-base text-muted-foreground text-center", className)}
      {...props}
    >
      {children}
    </Text>
  );
};

export default { Root, Main, Sub };
