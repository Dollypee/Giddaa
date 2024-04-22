  import PropTypes from 'prop-types'
  import { PlayIcon, PlayIcon2 } from '../../assets/icons/Icon'
  import { useState } from 'react';

  const Person = ({ person }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className='relative flex-none hover:cursor-pointer '
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className='absolute top-4 right-4'>
          <PlayIcon />
        </div>
        <img className='object-cover w-full h-auto rounded-lg' src={person.image} alt={person.name + ' pics'} />

        <div className="absolute inset-0 top-[22.7rem]  w-full">
          <div className="bg-black bg-opacity-30 text-white p-4 rounded-b-[1.5rem]">
            <h1 className='capitalize giddaa-heading-four-millik'>{person.name}</h1>
            <h4 className='giddaa-small-text-three uppercase giddaa-text-off-white py-3'>{person.title}</h4>
          </div>
        </div>

        {isHovered && (
          <div className='absolute inset-0 flex w-full h-full justify-center items-center flex-col hover:bg-black hover:bg-opacity-30 hover:rounded-[1.5rem]'>
            <PlayIcon2 />
            <div className='pt-4 text-center'>
              <h1 className='capitalize giddaa-heading-four-millik giddaa-text-off-white'>Hear From {person.name}</h1>
              <h4 className='giddaa-small-text-three uppercase giddaa-text-off-white py-3'>{person.title}</h4>
            </div>

          </div>
        )
        }

      </div>
    )
  }

  export default Person

  Person.propTypes = {
    person: PropTypes.object.isRequired,
  }