export default function Footer(){
    const today = new Date();
    return (
        <footer style={{ textAlign: 'center', padding: '1rem'}}>
            &copy; {today.getFullYear()} Thiago Fraga. Todos os direitos reservados.
            <div style={{ marginTop: "1rem", fontSize: "2rem" }}>
                <a href="https://github.com/thiagoigfraga" target="_blank">
                    <svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32" astro-icon="social/github" fill="#fff" style={{marginRight: "10px"}}>
                        <path
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 
                            0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 
                            1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 
                            0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 
                            1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 
                            2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 
                            0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 
                            0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 
                            8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                        ></path>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/thiagoigfraga" target="_blank">
                    <svg viewBox="0 0 50 50" aria-hidden="true" width="34" height="34" fill="#fff">
                        <path
                            d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,
                            5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,
                            1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,
                            11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96, 
                            26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,   
                            5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
                        ></path>
                    </svg>
                </a>
            </div>
        </footer>
    );
}