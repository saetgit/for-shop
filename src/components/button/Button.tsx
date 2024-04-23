import { ComponentProps } from "react";

type TVariant = "primary" | "secondary" | "danger" | "warning" | "success";
type TButton = ComponentProps<"button"> & {
  variant?: TVariant;
};
function Button({ children, variant,style,...rest }: TButton) {
  return <button {...rest} style={{borderRadius:"6px",padding:"4px 6px",...style,...checkVariant(variant)}} >{children}</button>;
}
export default Button;

function checkVariant(variant?:TVariant){
    if(variant==="primary"){
        return {backgroundColor:"blue",color:"white"}
    }else if(variant==="secondary"){
        return {backgroundColor:"gray",color:"black"}
    }
    else if(variant==="success"){
        return {backgroundColor:"green",color:"white"}
    }
    else if(variant==="warning"){
        return {backgroundColor:"yellow",color:"white"}
    }
}