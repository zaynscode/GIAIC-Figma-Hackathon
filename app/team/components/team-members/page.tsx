import React from 'react'
import TeamRow1 from './team-row-1/page'
import TeamRow2 from './team-row-2/page'
import TeamRow3 from './team-row-3/page'

function TeamMembers() {
  return (
    <div className='md:w-[1343px] md:h-[1759px] h-[4180px] bg-white'>
        <div className='md:w-[1050px] md:h-[1759px] w-[361px] h-[4117px] relative left-[26px] md:left-[195px]
       top-[600px] md:top-0 py-[30px] md:py-28 flex gap-28 flex-col md:place-items-center'>
             <div className='md:w-[607px] md:h-[50px] w-[361px] h-[190px] flex gap-[10px] relative 
            left-[50px] md:left-[160px] py-[45px] md:py-0'>
                <h2 className='md:w-[316px] md:h-[50px] w-[280px] h-[100px] font-montserrat font-bold
                 text-[#252B42] text-[40px] leading-[50px] tracking-[0.2px] text-center md:text-start'>
                  Meet Our Team</h2>
            </div> 
                 <TeamRow1/>
                 <TeamRow2/>
                 <TeamRow3/> 

        </div>

    </div>
  )
}

export default TeamMembers