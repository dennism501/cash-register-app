import React from 'react';
import { ChargePriceAmount, ItemList, TotalLine, } from '../components/ChargeList/ChargeList';

import { ChargeAmountCapture, KeyPadButton, KeyPadHolder, KeyPadMainHolder, MainScreen } from '../components/Keypad/KeyPad';
import { MainContainer, KeypadContainer, ChargeListContainer } from '../components/MainLayout/MainLayout';
import { totalCharge } from '../modules/registerFunctions'


const CashRegister: React.FC = () => {
    const [charge, setCharge] = React.useState<Array<string>>([])
    const [chargeList, setChargeList] = React.useState<Array<string>>([])


    //Creates the charge list from the accepted charges
    function addChargeToList() {
        setChargeList([...chargeList, Number(charge.join("")).toFixed(2)])
        console.log(totalCharge(chargeList));

        setCharge([])
    }

    function handleDelete() {
        const newArray: string[] = [...charge]
        newArray.pop()
        setCharge(newArray)
    }


    //Handles the floating number conversion from user input
    function handleCharge(event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) {
        event.preventDefault()
        const test = event.target as HTMLButtonElement
        let val: string = test.textContent!;
        setCharge([...charge, val])

    }

    return (
        <>
            <MainContainer>
                <KeypadContainer>
                    <MainScreen>
                        <ChargeAmountCapture>
                            {charge.length === 0 ? <p>R 0.00</p> : charge}
                        </ChargeAmountCapture>
                        <KeyPadMainHolder>

                            <KeyPadHolder>
                                <KeyPadButton onClick={(e) => handleCharge(e)}>
                                    1
                                </KeyPadButton>

                                <KeyPadButton onClick={(e) => handleCharge(e)}>
                                    2
                                </KeyPadButton >
                                <KeyPadButton onClick={(e) => handleCharge(e)}>
                                    3
                                </KeyPadButton>
                            </KeyPadHolder>

                            <KeyPadHolder>
                                <KeyPadButton onClick={(e) => handleCharge(e)}>
                                    4
                                </KeyPadButton>
                                <KeyPadButton onClick={(e) => handleCharge(e)}>
                                    5
                                </KeyPadButton>
                                <KeyPadButton onClick={(e) => handleCharge(e)}>
                                    6
                                </KeyPadButton>
                            </KeyPadHolder>

                            <KeyPadHolder>
                                <KeyPadButton onClick={(e) => handleCharge(e)}>
                                    7
                                </KeyPadButton>
                                <KeyPadButton onClick={(e) => handleCharge(e)}>
                                    8
                                </KeyPadButton>
                                <KeyPadButton onClick={(e) => handleCharge(e)}>
                                    9
                                </KeyPadButton>
                            </KeyPadHolder>

                            <KeyPadHolder>
                                <KeyPadButton onClick={handleDelete}>
                                    ❌
                                </KeyPadButton>
                                <KeyPadButton onClick={(e) => handleCharge(e)}>
                                    0
                                </KeyPadButton>
                                <KeyPadButton onClick={addChargeToList} >
                                    ✅
                                </KeyPadButton>

                            </KeyPadHolder>
                        </KeyPadMainHolder>
                    </MainScreen>
                </KeypadContainer>
                <ChargeListContainer>
                    <ItemList>
                        {chargeList.length > 0 ? chargeList.map((amount, index) => (
                            <ChargePriceAmount key={index}>R {amount}</ChargePriceAmount>
                        )) : (<ChargePriceAmount>R 0.00</ChargePriceAmount>)}
                        <TotalLine />
                        <ChargePriceAmount>{`${totalCharge(chargeList).toFixed(2)}`}</ChargePriceAmount>
                    </ItemList>
                </ChargeListContainer>

            </MainContainer>
        </>
    );
}

export default CashRegister;
