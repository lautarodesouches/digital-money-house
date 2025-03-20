import Link from 'next/link'
import styles from '../page.module.css'
import { ROUTES } from '@/routes'
import { Footer } from '@/components'

export default function Exito() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__div}>
                    <Link className={styles.header__link} href={ROUTES.LANDING}>
                        <svg
                            className={styles.header__logo}
                            viewBox="0 0 63 26"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M46.3235 10.1073H56.4818V0.5H63V25.5H56.4818V15.4199H46.3235" />
                            <path d="M34.8759 0.5L31.9066 11.5989C31.7654 12.2059 31.6113 12.8668 31.4473 13.5826C31.2823 14.2984 31.1292 14.9786 30.988 15.6202C30.8467 16.2638 30.7282 16.8149 30.6343 17.2755H30.3518C30.2333 16.6929 30.092 16.0381 29.9281 15.3101C29.7631 14.5821 29.5981 13.8846 29.4332 13.2176C29.2682 12.5506 29.127 12.0229 29.0094 11.6345L26.0737 0.5H17.1698C17.1224 4.6077 17.0878 7.64068 17.0828 9.16988C17.0828 9.41085 17.0799 10.3829 17.0088 11.6691C16.9613 12.5313 16.9376 12.9624 16.8665 13.4484C16.7737 14.0828 16.6146 15.1311 16.0585 16.3441C15.776 16.9613 15.3641 17.8387 14.4958 18.6949C14.1995 18.9877 13.6196 19.5855 12.6575 19.9688C11.9266 20.2596 11.0662 20.405 10.0764 20.405H6.32877V5.59496C7.35805 5.59903 8.16211 5.59802 8.71626 5.59496C9.19731 5.59293 9.49365 5.59191 9.8048 5.59496C9.92927 5.597 10.0547 5.59903 10.2088 5.6031C11.1739 5.6275 11.7004 5.64072 12.3029 5.69867C12.6032 5.72714 13.027 5.77696 13.5367 5.86746V0.761306C13.1416 0.696234 12.7217 0.640312 12.2782 0.598625C11.7004 0.543721 11.1551 0.520335 10.6504 0.517285C7.09925 0.511184 3.55012 0.506101 0 0.5V25.5H10.1466C12.786 25.5 15.0193 25.0516 16.8458 24.1538C17.7002 23.7339 18.4588 23.2072 19.1226 22.5768C19.1226 22.5768 19.1266 22.5738 19.1276 22.5717C19.1404 22.5595 19.1552 22.5484 19.1681 22.5351C19.2046 22.4996 19.2619 22.4426 19.3281 22.3755C19.6649 22.042 20.0768 21.5855 20.4838 20.9856C21.3699 19.6781 21.7748 18.3644 22.0336 17.1006C22.0346 17.0965 22.0356 17.0924 22.0366 17.0884C22.5285 14.9715 22.5522 13.2705 22.5601 12.7855C22.5601 12.7722 22.5601 12.757 22.5601 12.7428C22.569 12.4581 22.571 12.2201 22.572 12.0534C22.572 12.0422 22.572 12.032 22.572 12.0209C22.5977 10.6249 22.6392 8.90959 22.6876 6.90455H22.7132C22.8308 7.39056 22.9661 7.98434 23.1202 8.68794C23.2733 9.39153 23.4324 10.0829 23.5973 10.7621C23.7623 11.4413 23.9035 12.0239 24.0211 12.5089L27.5919 25.5H32.683L36.2183 12.5089C36.3596 11.9751 36.5186 11.3386 36.6954 10.5984C36.8722 9.85822 37.0372 9.14243 37.1903 8.45103C37.3434 7.75964 37.455 7.23194 37.5261 6.86794H37.8087C37.8087 7.25634 37.7968 7.88673 37.7731 8.76013C37.7494 9.63352 37.7316 10.6045 37.7197 11.6711C37.7079 12.7387 37.702 13.7941 37.702 14.8373V25.5H43.8529V0.5H34.8729H34.8759Z" />
                        </svg>
                    </Link>
                </div>
                <nav className={styles.header__nav}>
                    <Link className={styles.header__link} href={ROUTES.INGRESO}>
                        <button className={styles.header__login}>
                            Iniciar sesión
                        </button>
                    </Link>
                </nav>
            </header>
            <main className={styles.exito}>
                <h2 className={styles.exito__title}>Registro Exitoso</h2>
                <svg
                    className={styles.exito__svg}
                    viewBox="0 0 92 95"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clip-path="url(#clip0_1720_2865)">
                        <path
                            d="M48.8981 5.97273C43.2338 5.96204 37.6232 7.10682 32.3884 9.34132C27.1537 11.5758 22.398 14.8561 18.3944 18.9937C1.5756 36.3609 1.5756 64.6115 18.4001 81.9787C35.2189 99.3399 62.5774 99.3399 79.3961 81.9787C96.2091 64.6115 96.2091 36.3609 79.3961 18.9937C75.3948 14.8562 70.6411 11.5759 65.4082 9.34133C60.1754 7.10677 54.5665 5.96198 48.9039 5.97273H48.8981ZM48.8981 11.8746C58.4546 11.8746 68.0111 15.6449 75.3251 23.1915C78.8012 26.773 81.559 31.0274 83.4407 35.711C85.3224 40.3946 86.2909 45.4155 86.2909 50.4862C86.2909 55.5568 85.3224 60.5777 83.4407 65.2613C81.559 69.9449 78.8012 74.1993 75.3251 77.7809C71.8567 81.3703 67.7366 84.2181 63.2009 86.1611C58.6652 88.1041 53.8029 89.1043 48.8924 89.1043C43.9818 89.1043 39.1195 88.1041 34.5838 86.1611C30.0481 84.2181 25.9281 81.3703 22.4596 77.7809C18.9835 74.1993 16.2257 69.9449 14.344 65.2613C12.4623 60.5777 11.4938 55.5568 11.4938 50.4862C11.4938 45.4155 12.4623 40.3946 14.344 35.711C16.2257 31.0274 18.9835 26.773 22.4596 23.1915C25.927 19.5994 30.0477 16.7503 34.585 14.8082C39.1222 12.866 43.9865 11.8691 48.8981 11.8746ZM65.9181 38.6052C65.3736 38.6581 64.855 38.8703 64.4231 39.2168L43.4126 55.4856L33.6779 45.4393C33.4126 45.1558 33.0954 44.9296 32.7446 44.774C32.3939 44.6184 32.0166 44.5365 31.6349 44.5331C31.2531 44.5297 30.8746 44.6048 30.5212 44.754C30.1679 44.9033 29.8469 45.1238 29.577 45.4025C29.307 45.6812 29.0935 46.0127 28.949 46.3776C28.8044 46.7424 28.7317 47.1333 28.735 47.5275C28.7383 47.9217 28.8176 48.3113 28.9683 48.6735C29.119 49.0357 29.338 49.3633 29.6126 49.6371L41.1126 61.5121C41.6014 62.0171 42.25 62.3232 42.9396 62.3745C43.6292 62.4257 44.3136 62.2186 44.8674 61.7912L67.8674 43.9787C68.3547 43.6119 68.718 43.0961 68.9059 42.5043C69.0937 41.9126 69.0966 41.2748 68.9141 40.6813C68.7316 40.0877 68.373 39.5685 67.889 39.197C67.405 38.8255 66.8201 38.6205 66.2171 38.6112C66.1194 38.606 66.0215 38.606 65.9239 38.6112L65.9181 38.6052Z"
                            fill="#C1FD35"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1720_2865">
                            <rect width="92" height="95" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <Link className={styles.exito__link} href={`${ROUTES.INGRESO}?exito=1`}>
                    <button className={styles.exito__button}>Continuar</button>
                </Link>
            </main>
            <Footer />
        </>
    )
}
