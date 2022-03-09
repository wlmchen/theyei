import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faDesktop
} from '@fortawesome/free-solid-svg-icons'

export default function Portal({ title }) {
  return (
    <div className="relative bg-white py-20 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="lg:pl-8 px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-yei-primary-main text-white">
                  <FontAwesomeIcon icon={faDesktop} className="w-6 h-6" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold text-yei-primary">{title}</h2>
                <p className="mt-4 text-lg text-gray-500">
                  The YEI holds <strong>60+ Modules of Curriculum + An Interactive Learning Portal</strong> that facilitate learning of various topics very conveniently. Through the use of our comprehensive AP/IB Economics club curriculum.
                </p>
                <div className="mt-6">
                  <a target="_blank" rel="noreferrer" href="https://learn.theyei.org" className="inline-flex px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yei-primary-main hover:bg-yei-primary-darker">View Learning Portal</a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="https://learn.theyei.org/img/others/home/slides.png" alt="YEI Learning Portal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}