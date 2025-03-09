import { ReactNode } from "react";
import { View } from "react-native";
import { cn } from "~/lib/utils";

interface HeaderProps {
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  left,
  center,
  right,
  className = "",
}) => {
  return (
    <View
      role="navigation"
      className={cn("relative flex-row items-center px-4 py-3", className)}
    >
      <View className="z-10 flex-row items-center justify-start">
        {left || <View className="w-10" />}
      </View>
      <View className="absolute left-0 right-0 items-center justify-center">
        {center}
      </View>
      <View className="z-10 flex-row items-center justify-end ml-auto">
        {right || <View className="w-10" />}
      </View>
    </View>
  );
};

export default Header;
