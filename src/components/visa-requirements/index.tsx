import { FC, useState } from 'react';
import { FaPassport, FaFileAlt, FaCalendarAlt, FaMoneyBillWave, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const visaTypes = [
  {
    icon: FaPassport,
    title: 'Hajj Visa',
    requirements: [
      'Valid passport with 6 months validity',
      'Completed visa application form',
      'Recent passport-size photographs',
      'Proof of Mahram relationship for women',
      'Vaccination certificates'
    ],
    processingTime: '4-6 weeks',
    fees: 'Contact for current rates'
  },
  {
    icon: FaFileAlt,
    title: 'Umrah Visa',
    requirements: [
      'Valid passport with 4 months validity',
      'Completed visa application form',
      'Recent passport-size photographs',
      'Proof of Mahram relationship for women',
      'Return flight tickets'
    ],
    processingTime: '2-3 weeks',
    fees: 'Contact for current rates'
  },
  {
    icon: FaCalendarAlt,
    title: 'Tourist Visa',
    requirements: [
      'Valid passport with 6 months validity',
      'Completed visa application form',
      'Recent passport-size photographs',
      'Hotel reservations',
      'Return flight tickets'
    ],
    processingTime: '5-7 working days',
    fees: 'Contact for current rates'
  },
  {
    icon: FaMoneyBillWave,
    title: 'Business Visa',
    requirements: [
      'Valid passport with 6 months validity',
      'Business invitation letter',
      'Company registration documents',
      'Bank statements',
      'Return flight tickets'
    ],
    processingTime: '7-10 working days',
    fees: 'Contact for current rates'
  }
];

const VisaRequirements: FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visa Requirements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about visa requirements for your journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visaTypes.map((visa, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center bg-emerald-100 rounded-full mb-4">
                  <visa.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{visa.title}</h3>

                <div className="space-y-4 w-full">
                  <div className="md:block">
                    <button
                      onClick={() => toggleCard(index)}
                      className="w-full flex items-center justify-between text-left md:hidden mb-2"
                    >
                      <h4 className="font-medium text-emerald-600">Requirements</h4>
                      {expandedCard === index ? (
                        <FaChevronUp className="text-emerald-600" />
                      ) : (
                        <FaChevronDown className="text-emerald-600" />
                      )}
                    </button>
                    <div
                      className={`md:block ${expandedCard === index ? 'block' : 'hidden'}`}
                    >
                      <ul className="text-gray-600 text-left space-y-2 mb-4">
                        {visa.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                      <div className="text-left">
                        <p className="text-gray-600">
                          <span className="font-medium text-emerald-600">Processing Time:</span>{' '}
                          {visa.processingTime}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium text-emerald-600">Fees:</span> {visa.fees}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaRequirements;