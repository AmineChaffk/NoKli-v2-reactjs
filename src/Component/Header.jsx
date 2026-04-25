import Nav from "./Nav"

const Header = ({ toggleTheme, theme }) => {
  return (
    <>
      <header className="hidden sm:flex flex-col h-screen sticky gap-y-10 top-0 xl:w-68.75 w-fit items-end xl:items-start px-2 sm:px-4 py-4">
        <h1 className="text-3xl text-black dark:text-white font-bold transition-colors duration-200 hidden xl:block">NoKill</h1>
        <h1 className="text-3xl text-black dark:text-white font-bold transition-colors duration-200 xl:hidden px-2">N</h1>
        <Nav toggleTheme={toggleTheme} theme={theme} />
      </header>

      <div className="sm:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-800 z-50 px-2 py-2 transition-colors duration-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] dark:shadow-none">
        <Nav toggleTheme={toggleTheme} theme={theme} isMobile={true} />
      </div>
    </>
  )
}

export default Header;