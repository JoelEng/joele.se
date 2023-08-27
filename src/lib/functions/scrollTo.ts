export const scrollTop = () => {
    const root = document.documentElement;
    root.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
}

export const scrollTo = (ref: string, offset = 0) => {
    const el = document.getElementById(ref)
    const y = el!.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
}