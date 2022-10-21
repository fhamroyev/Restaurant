import react from 'react'


export default function Footer() {



    return (
        <div className='notification is-info is-flex is-justify-content-space-around is-align-items-center footers'>
            <div className='is-flex is-flex-direction-column is-align-items-center'>
                <div className='contact'>
                    <h1 className='subtitle'>Contact us</h1>
                    <a href="https://t.me/chuqurRestaurant" className='is-flex is-align-items-center is-size-6 footer-subtitle'>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        <h1>@ChuqurRestaurant</h1>
                    </a>
                </div>
                <br />
                <a href="tel: +998999689449" className='is-flex is-align-items-center is-size-6 footer-subtitle'>
                    <ion-icon name="call-outline"></ion-icon>
                    <h1>+998 99 968 94 49</h1>
                </a>
            </div>
            <div className='is-flex is-flex-direction-column is-align-items-center footer-subtitle footer-address'>
                <h1 className='subtitle'>ⒸChuqur restaurant address</h1>
                <h1>Bukhara region kagan city </h1>
            </div>
            <div>
                <h1 className='subtitle word'>Site built by Firdavs Hamroyev</h1>
            </div>
            {/* <select className='select'>
                <option className='option'>english</option>
                <option className='option'>руский</option>
                <option className='option'>Uzbek</option>
            </select> */}
        </div>
    )
}