interface Props {
    tecnology: string;
}

const Badge = ({ tecnology }: Props) => {
    return (
        <div className="flex h-[35px] items-center justify-between rounded-xl bg-bgBadge">
            <p className="mx-3 text-[1em] font-bold text-primaryCyan">
                {tecnology}
            </p>
        </div>
    );
};
export default Badge;
