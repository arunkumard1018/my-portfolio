import React from 'react'

function NavBar() {
    return (
        <div>
            <nav className="lg:hidden flex h-12 bg-[#222222] fixed w-screen">
                <h1 className="my text-xl font-bold mx-2 mt-2">A <span className="text-green-600">/</span> K</h1>
            </nav>
        </div>
    )
}

export default NavBar