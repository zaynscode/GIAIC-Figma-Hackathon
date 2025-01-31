import React from 'react'
import TeamRow1 from './team-row-1/page'
import TeamRow2 from './team-row-2/page'
import TeamRow3 from './team-row-3/page'

function TeamMembers() {
  return (
    <div className='md:w-[1349px] md:h-[1759px] bg-white'>
        <div className='md:w-[1050px] md:h-[1759px] relative left-[195px] py-28 flex gap-28 flex-col
        place-items-center'>
            <div className='md:w-[607px] md:h-[50px] flex gap-[10px] relative left-[160px]'>
                <h2 className='md:w-[316px] md:h-[50px] font-montserrat font-bold text-[#252B42]
                text-[40px] md:leading-[50px] teacking-[0.2px]'>Meet Our Team</h2>
            </div>
                <TeamRow1/>
                <TeamRow2/>
                <TeamRow3/>

        </div>

    </div>
  )
}

export default TeamMembers