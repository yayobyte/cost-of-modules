import styled from "styled-components";

export const GraphPageContainer = styled.div`
    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .slogan {
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: 2px;
        
        .bundle-text {
            color: #111111;
        }
        
        .phobia-text {
            color: #888888;
        }

    }

    .logo {
        width: 40px;
        height: 40px;
    }

    .statistics-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 80px;

        .statistics-data {
            flex-direction: column;
            

            .stats-header {
                font-size: 1.5rem;
                font-weight: 100;
                text-transform: uppercase;
                color: var(--color-text)
            }

            .stats-row {
                font-size: 1rem;
                flex-flow: row nowrap;
                justify-content: center;
                display: flex;
            }

        }
    }

    hr.divider {
        margin: 50px 0;
        border: none;
        height: 1px;
        background-color: #CCCCCC;
    }
`;