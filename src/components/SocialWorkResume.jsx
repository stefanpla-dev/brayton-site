import React from 'react'
import '../styles/SocialWorkResume.css'

function SocialWorkResume() {
  return (
    <div className="social-work-page">
      <div className="resume-text">
        <section className="resume-section">
          <h2>Education</h2>
          <ul>
            <li><strong>Washington State Department of Health (2014)</strong> - Licensed Independent Clinical Social Worker</li>
            <li><strong>University of Washington (2008-2010)</strong> - Master of Social Work, Concentration in Mental Health</li>
            <li><strong>The Ohio State University (2002-2007)</strong> - Bachelor of Arts in Sexualities Studies</li>
          </ul>
        </section>
        <section className="resume-section">
          <h2>Social Work Experience</h2>
          <div className="experience-item">
            <h3>BetterHelp (2020-Present)</h3>
            <p><strong>Therapist</strong></p>
            <ul>
              <li>Work with clients on establishing goals</li>
              <li>Discuss therapeutic approaches and set expectations</li>
              <li>Primary focus on LGBTQ and couple’s therapy</li>
              <li>Work on therapeutic termination plans to end therapy</li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>GALA Board of Directors (2020-Present)</h3>
            <p><strong>Education and Networking Committee Chair</strong></p>
            <ul>
              <li>Attend monthly Board meetings focusing in current state of GALA
              activities and future goals</li>
              <li>Attend and Lead monthly Education and Networking Committee
              meetings that focus on GALA Symposium planning, updating resources
              on the GALA website, and hiring for the GALA 411 program</li>
              <li>Assist with GALA anniversary messaging and organizational
              fundraising</li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>Arizona ACDA Board of Directors (2019)</h3>
            <p><strong>TTBB Music Committee Chair</strong></p>
            <ul>
              <li>Attend Quarterly Meetings throughout state of Arizona to discuss
              ongoings of the Arizona ACDA membership</li>
              <li>Provide support for Arizona ACDA membership with questions
              regarding TTBB music</li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>Virginia Mason Medican Center (2017-2018)</h3>
            <p><strong>Inpatient Social Worker: Interim Supervisor</strong></p>
            <ul>
              <li>Supervised full-time and per diem staff members, hired and trained new
              employees, create monthly staffing schedule, assisted with case consulta-
              tions, engaged with administrations on working through system changes
              that streamline work, directly supervised social workers towards licen-
              sure hours, assisted patients with medical and social issues, developed
              discharge plans with medical team and patient for coordination of care at
              home or at medically assisted facilities, provide therapeutic interventions
              with domestic violence survivors, provide addiction service interventions
              for users, provided bereavement support, advise medical team on proto-
              col for working with Child Protective Services and Adult Protective Ser-
              vices, and presented ethical and legal concerns over patient care.</li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>Harborview Medical Center (2011-2016)</h3>
            <p><strong>Inpatient Social Worker</strong></p>
            <ul>
              <li>Assisted patients with medical and social issues, developed discharge
              plan with medical team and patient for coordination of care at home or at
              medically assisted facilities, provided therapeutic interventions with do-
              mestic violence survivors, provided addiction service interventions for
              users, provided bereavement support, advised medical team on protocol
              for working with Child Protective Services and Adult Protective Ser-
              vices, and presented ethical and legal concerns over patient care.</li>
            </ul>
          </div>
        </section>
      </div>
      <div className="social-work-images">
        <div className="social-work-image-1"></div>
      </div>
    </div>
  )
}

export default SocialWorkResume