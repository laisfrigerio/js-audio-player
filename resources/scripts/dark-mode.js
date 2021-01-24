window.addEventListener('load', () => {
    onLoad()
})

const buttonToggleThemeMode = document.querySelector(".toggle-theme button")
if (buttonToggleThemeMode) {
    buttonToggleThemeMode.addEventListener("click", () => {
        toggle()
    })
}

export const onLoad = () => {
    const darkTheme = localStorage.getItem('darkTheme')
    darkTheme ? document.body.classList.add('dark-theme') : document.body.classList.remove('dark-mode')
}

export const toggle = () => {
    const darkTheme = localStorage.getItem('darkTheme')
        
    if (!darkTheme) localStorage.setItem('darkTheme', true)
    else localStorage.removeItem('darkTheme')

    document.body.classList.toggle('dark-theme')
}