interface Props {
    tecnology: string;
}

const Badge = ({ tecnology }: Props) => {
    return (
        <div className="flex h-[35px] items-center justify-between rounded-md   ">
            <p className="mx-3 text-[1em] font-bold  ">{tecnology}</p>
        </div>
    );
};
export default Badge;
