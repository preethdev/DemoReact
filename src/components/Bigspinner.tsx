export function Bigspinner() {
    return (
        <div className="relative flex justify-center items-center h-full">
            <div className="m-4 text-black">Loading</div>
            <div className="rounded animate-spin ease duration-300 w-5 h-5 border-2 border-black"></div>
        </div>);
}