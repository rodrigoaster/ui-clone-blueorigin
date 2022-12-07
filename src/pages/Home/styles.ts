import styled from 'styled-components';

export const Container = styled.div`
    .bg:nth-child(1) {
        display: flex;
        justify-content: flex-start;
        
        background: #6F1A07;
        
        padding-left: 120px;

        h2 {
            font-weight: lighter;
            width: 70%;
            line-height: 1;
        }

        color: #fff;

    }
    .bg:nth-child(2) {
        display: flex;
        justify-content: center;
        text-align: center;

        background: #93E5AB;
        
        h2 {
            font-weight: lighter;
            line-height: 0.5;
        }

        color: #fff;

    }
    .bg:nth-child(3) {
        display: flex;
        justify-content: flex-start;

        background: #65B891;

        padding-left: 120px;

        h2 {
            line-height: 0.5;
        }

        h3 {
            font-weight: lighter;
        }

        color: #fff;

    }
    .bg:nth-child(4) {
        background: #4E878C;

        h2 {
            font-weight: lighter;
            width: 70%;
            line-height: 0.5;
        }

        p {
            font-size: 20px;
            font-weight: normal;

            width: 60%;

            margin-bottom: 20px;
        }

        color: #fff;

        padding-left: 50px;

    }
    .bg:nth-child(5) {
        display: flex;
        justify-content: center;
        text-align: center;

        background: #00241B;

        h2 {
            font-weight: lighter;
            line-height: 0.5;
        }

        color: #fff;
    }
`;
