import { AntDesign, Feather } from "@expo/vector-icons";
import React from "react";

export const icons = {
  index: (props) => React.createElement(AntDesign, { name: "home", size: 26, ...props }),
  explore: (props) => React.createElement(Feather, { name: "compass", size: 26, ...props }),
  create: (props) => React.createElement(AntDesign, { name: "pluscircleo", size: 26, ...props }),
  profile: (props) => React.createElement(AntDesign, { name: "user", size: 26, ...props }),
};
