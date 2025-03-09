import { View, ViewProps } from "react-native";
import { cn } from "~/lib/utils";

type HeaderProps = ViewProps;

function Root({ children, className, ...props }: HeaderProps) {
  return (
    <View
      role="navigation"
      className={cn(
        "w-full grid grid-cols-header gap-1 grid-rows-1 items-center justify-center content-center align-middle",
        className
      )}
      {...props}
    >
      {children}
    </View>
  );
}

function Left(props: HeaderProps) {
  return <View className="col-start-1 justify-self-start" {...props}></View>;
}

function Center(props: HeaderProps) {
  return <View className="col-start-2 justify-self-center" {...props}></View>;
}

function Right(props: HeaderProps) {
  return <View className="col-start-3 justify-self-end" {...props}></View>;
}

export default { Root, Left, Center, Right };
