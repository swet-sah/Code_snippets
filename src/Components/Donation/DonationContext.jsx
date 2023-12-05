import { createContext, useState, useEffect } from "react";

const DonationContext = createContext();
const DonationProvider = ({ children }) => {
    const [page, togglepage] = useState("money");
    const [money, onMoneyChange] = useState("");
    const handleClick = () => {
        setdonatePage(!donatepage);
    }

    useEffect(() => {
        onMoneyChange(money);
    }, [money])
    const [donatepage, setdonatePage] = useState(false);
    return (
        <DonationContext.Provider value={{ page, togglepage, money, onMoneyChange, donatepage, setdonatePage,handleClick }}>
            {children}
        </DonationContext.Provider>
    )
}
export { DonationContext, DonationProvider }