import React from 'react';
import styled, { keyframes } from 'styled-components';

const Gear=()=>{
    return(
        <GearWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>
            {/*<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="">
                <rect className="rec1" fill="#214981" width="6" height="8" x="37" y="22"></rect>
                <rect className="rec2" fill="#214981" width="6" height="8" x="60" y="28"></rect>
                <rect className="rec3" fill="#214981" width="6" height="8" x="61" y="65"></rect>
                <rect className="rec4" fill="#214981" width="6" height="8" x="46" y="26"></rect>
                 <rect className="rec5" fill="#214981" width="6" height="8" x="36" y="22"></rect>
                <rect className="rec6" fill="#214981" width="6" height="8" x="36" y="22"></rect>
                <rect className="rec7" fill="#214981" width="6" height="8" x="36" y="22"></rect> 
                <rect className="rec8" fill="#214981" width="6" height="8" x="37" y="70"></rect>

                <circle id="overa" class="cls-control-2" cx="40" cy="50" r="20" fill="transparent" stroke-width="4" stroke="#214981"></circle>
                <circle id="overb" class="cls-control-2" cx="40" cy="50" r="10" fill="transparent" stroke-width="4" stroke="#214981"></circle>

                <circle id="overc" cx="40" cy="50" r="5" fill="transparent"/>
            </svg>*/}
        </GearWrapper>
    )
}

export default Gear;

const gearAnimation = keyframes`
    0%{
        transform: rotate(0deg);
    }

    100%{
        transform:rotate(360deg);
    }
`

const GearWrapper = styled.svg`
    svg{
        display:inline-block;
        animation:${gearAnimation};
        animation-duration: 3000ms;
        animation-iteration-count:infinite;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    }

`