interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}
export default function Label({ ...props}: LabelProps ){
    return <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" {...props}/>
}