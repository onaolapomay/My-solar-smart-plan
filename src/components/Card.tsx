type CardProps ={
    title: string;
    value: string | number;
    icon?: React.ReactNode;
    status?: string
}

const Card = ({ title, value, icon, status }: CardProps) => {
    return (
        <div className="flex items-center justify-between">
            
            <div className="backdrop-blur-md border border-white/10 bg-slate-900/90 transition-all duration-300 hover:scale-105 text-white p-6 rounded-2xl min-h-37.5">
                <h3 className="text-base text-slate-400">{title}</h3>
                <p className="text-4xl font-bold mt-4">{value}</p>
                {status && <p className="mt-2 text-green-400">{status}</p>}
                {icon && <div className="mt-2">{icon}</div>}
            </div>
        </div>
        
    )
}


export default Card