export default function ProfileTextField({label, get, set}) {
    return (
        <div className="d-flex flex-column border border-secondary border-solid border-thin rounded p-1 px-2 my-3">
            <label htmlFor="profile-text-field" className={`text-secondary wd-fs-sm ${!get ? "d-none" : ""}`}>{label}</label>
            <input id="profile-text-field" className={`${!get ? "my-2" : ""}`} type={"text"} placeholder={label} value={get} onChange={(e) => set(e.target.value)}/>
        </div>
    );
}