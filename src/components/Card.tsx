type CardProps ={
    title: string;
    value: string | number;
    icon?: React.ReactNode;
}

const Card = ({ title, value, icon }: CardProps) => {
    return (
        <div className="flex items-center justify-between">
            
            <div className="bg-slate-900 text-white p-6 rounded-2xl min-h-37.5">
                <h3 className="text-base text-slate-400">{title}</h3>
                <p className="text-4xl font-bold mt-4">{value}</p>
                {icon && <div className="mt-2">{icon}</div>}
            </div>
        </div>
        
    )
}


export default Card