import type { FC, ReactNode } from "react";
import React from "react";

type ButtonProps = {
  size?: "sm" | "md" | "lg";
  visual?: "作成" | "キャンセル" | "削除" | "編集" | "保存" | "閉じる";
  onClick?: () => void;
  children: ReactNode;
};

const Button: FC<ButtonProps> = ({
  size = "md",
  visual = "作成",
  onClick,
  children,
  ...props
}) => {
  const sizeClass = {
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
  }[size];

  const visualClass = {
    作成: "btn-create",
    キャンセル: "btn-cancel",
    削除: "btn-delete",
    編集: "btn-edit",
    保存: "btn-save",
    閉じる: "btn-close",
  }[visual];

  return (
    <button
      className={`btn ${sizeClass} ${visualClass}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
