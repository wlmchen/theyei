import Link from 'next/link'
import React from 'react'
import CurriculumSection from './CurriculumSection'

export default function Curriculum() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-20 sm:px-6 lg:px-8">
        <CurriculumSection
          title="9-Module Middle School Curriculum"
          content="Seeing the need for financial literacy exposure at earlier stages in
        the school system, the FLIP team, led by Saqib Saiyed and with Alex
        Xie as the curriculum designer, has worked to develop this 9-module
        Middle School Financial Literacy curriculum for free use around the
        world. This course has no requirements or prerequisites, so feel free
        to start your financial literacy journey with these lessons! For more
        in-depth FinLit learning, schools can use our 16-week High School FLIP
        curriculum below."
          slideLink="https://docs.google.com/presentation/d/e/2PACX-1vTGYfIoP4N5xo-WB3wDmGw0ogikHYvEAjJ4GK8096g1XKFJ4ybA6PlA_G1pHTTAn5dx6NFQQkOQxgUs/embed"
          folderLink='https://drive.google.com/drive/folders/1U2G8m_cr2rwGYTsDKvGPImbmX2jPsUGV'
        />
        <CurriculumSection
          title="16-Week High School Curriculum"
          darkerBg={true}
          folderLink='https://drive.google.com/drive/folders/1LkHpqZE3igG7tkEGAM8XoxozgSuO7CB0'
          slideLink="https://docs.google.com/presentation/d/e/2PACX-1vRtiO_Jb6KgAQwLIeCIQ8l7tSfrYPv_JpEuB-X0F2dRH02QcJv4mfkdD20W-8zYZoKF5zSLUzV_yu4g/embed"
          content={
            <p>
              While EconClubs must apply to be accepted to our FLIP program,
              every YEI EconClub is provided with the{' '}
              <b>16-week FLIP curriculum</b>, which can be used to teach club
              members about financial literacy. The FLIP curriculum has
              approximately 30 hours worth of content and covers topics such as
              budgeting, loans, credit and debit cards, 401(k), retirement,
              interest, savings, investing, and insurance. retirement, interest,
              savings, investing, and insurance. Learn more on the{' '}
              <Link href="/resources">
                <a className="green-link">resources page</a>
              </Link>
              .
            </p>
          }
        />
      </div>
    </div>
  )
}
