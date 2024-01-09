import './Sponsors.css';
import sponsor1 from '../img/sponsor1.png';
import sponsor2 from '../img/sponsor2.png';
import sponsor3 from '../img/sponsor3.png';
import sponsor4 from '../img/sponsor4.png';
import sponsor5 from '../img/sponsor5.png';
import sponsor6 from '../img/sponsor6.png';
import sponsor7 from '../img/sponsor7.png';
import sponsor8 from '../img/sponsor8.png';
import sponsor9 from '../img/sponsor9.png';
import sponsor10 from '../img/sponsor10.png';

const Sponsors = (props) => {
    return (
        <div className='sponsors' id='sponsors'>
            <div className='sponsors-header'><h2>Sponsors</h2></div>
            <table className='sponsors-table'>
                <tr className='sponsors-table-row'>
                    <td className='sponsors-table-column'><img src={sponsor1} className='logo-sponsors'/></td>
                    <td className='sponsors-table-column'><img src={sponsor2} className='logo-sponsors'/></td>
                    <td className='sponsors-table-column'><img src={sponsor3} className='logo-sponsors'/></td>
                    <td className='sponsors-table-column'><img src={sponsor4} className='logo-sponsors'/></td>
                    <td className='sponsors-table-column'><img src={sponsor5} className='logo-sponsors'/></td>
                </tr>
                <tr className='sponsors-table-row'>
                    <td className='sponsors-table-column'><img src={sponsor6} className='logo-sponsors'/></td>
                    <td className='sponsors-table-column'><img src={sponsor7} className='logo-sponsors'/></td>
                    <td className='sponsors-table-column'><img src={sponsor8} className='logo-sponsors'/></td>
                    <td className='sponsors-table-column'><img src={sponsor9} className='logo-sponsors'/></td>
                    <td className='sponsors-table-column'><img src={sponsor10} className='logo-sponsors'/></td>
                </tr>
            </table>
        </div>
    )


}

export default Sponsors