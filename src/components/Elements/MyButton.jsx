import { Button } from "@chakra-ui/react";
function MyButton({
  children = "My Button",
  variant = "solid",
  colorScheme = "teal",
  color,
  border,
}) {
  return (
    <div>
      <Button
        variant={variant}
        colorScheme={colorScheme}
        color={color}
        border={border}
      >
        {children}
      </Button>
    </div>
  );
}

export default MyButton;
