"use client"; 
import React from 'react';

const PublicationsPage = () => {
  return (
    <div className="bg-[#F5F5F5] text-black min-h-screen font-serif">
      {/* Sticky Navigation with Name and Links */}
      <nav className="bg-white py-4 shadow-md fixed top-0 left-0 w-full z-50 text-center">
        <div className="container mx-auto">
          {/* Name Section */}
          <h1 className="text-4xl font-bold">Samuel N. Koscelny</h1>

          {/* Navigation Links */}
          <div className="mt-4 space-x-12 font-sans text-lg flex justify-center">
            <a href="/" className="hover:text-[#2541B2] hover:underline">Home</a>
            <a href="/research" className="hover:text-[#2541B2] hover:underline">Research</a>
            <a href="/publications" className="hover:text-[#2541B2] hover:underline underline">Publications</a>
            <a href="/about" className="hover:text-[#2541B2] hover:underline">About</a>
            <a href="/cv" className="hover:text-[#2541B2] hover:underline">CV</a>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <section className="pt-32 py-16 px-4 lg:px-24 bg-[#F5F5F5]">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-8">Publications</h1>

          {/* Journal Papers Under Review */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Journal Papers Under Review (Submitted)</h2>
            <ul className="list-disc pl-5 space-y-4">
              <li>
                <strong>Koscelny, S.N.</strong>, S. Sadralashrafi, D.M. Neyens (Submitted, 2024). The Danger in Easy Answers: Conceptualizing Processing Fluency Bias for Healthcare Chatbot Information Presentation in an Inductive Thematic Analysis of User Experience and Perceptions. 
                <em> *(Submitted to Computers in Human Behavior).</em>
              </li>
              <li>
                <strong>Koscelny, S.N.</strong>, D.M. Neyens, F. Zeinali, K. Taaffe, A.M. Dietrich, A. Joseph (Submitted, 2024). Factors Impacting the Time to Disposition for Pediatric Mental and Behavioral Health Emergency Department Visits.
                <em> *(Submitted to International Journal of Biomedical Informatics).</em>
              </li>
              <li>
                <strong>Koscelny, S.N.</strong>, M.T. Nare, K.A. Jurewicz (Submitted, 2024). Put Your Gestures Where Your Mouth Is – Exploring the Effect of Primary Verbal Language on Intuitive Gesture Elicitation in 3D Gestural Recognition Systems.
                <em> *(Submitted to International Journal of Human-Computer Interaction).</em>
              </li>
              <li>
                <strong>Koscelny, S.N.</strong>, S. Sadralashrafi, D.M. Neyens (Submitted, 2024). Generative AI Responses are a Dime a Dozen; Making Them Count is the Challenge – Evaluating Information Presentation Styles in Healthcare Chatbots Using Hierarchical Bayesian Regression Models.
                <em> *(Submitted to Applied Ergonomics).</em>
              </li>
              <li>
                <strong>Koscelny, S.N.</strong>, D.M. Neyens, A.M. Dietrich, D. Stewart, V.G. Parker, A. Joseph (Submitted, 2024). Emergency Department Visits for Children Identified as at Risk of Mental and Behavioral Conditions in the United States: An Analysis of the 2019 NHIS Data.
                <em> *(Submitted to BMC Health Services).</em>
              </li>
            </ul>
          </div>

          {/* Journal Papers in Development */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Journal Papers in Development</h2>
            <ul className="list-disc pl-5 space-y-4">
              <li>Gilman, E., <strong>S.N. Koscelny</strong>, Dixon, E. (In preparation). Working Towards Success in an Unsupportive Environment: Investigating Routine Management Systems to Empower Autistic University Students. 
                <em>Planned for submission to ACM Designing Interactive Systems Conference (DIS) 2025.</em>
              </li>
              <li>Soman, D., <strong>S.N. Koscelny</strong>, Taaffe, K., Neyens, D., Allison, D., Dietrich, A., Joseph, A. (In preparation). Using Patient Journey Mapping and Provider Workflows to Understand Process Barriers to Pediatric Mental and Behavioral Health Care in Emergency Departments.
                <em>Planned for submission to Human Factors.</em>
              </li>
              <li><strong>S.N. Koscelny</strong>, Rucker II, R., Reed, M., Neyens, D., Duchowski, A.T. (In preparation). The Impact of Healthcare Chatbots’ Communication Style on User Eye Gaze Behavior.
                <em>Planned for submission (undecided).</em>
              </li>
              <li><strong>S.N. Koscelny</strong>, F. Zeinali, D.M. Neyens, K. Taaffe, A.M. Dietrich, A. Joseph (In preparation). Systematic Review of Built Environment Interventions in Emergency Departments and Their Impact on Mental and Behavioral Health Outcomes for Pediatric Patients.
                <em>Planned for submission (undecided).</em>
              </li>
              <li><strong>S.N. Koscelny</strong>, D.M. Neyens, F. Zeinali, K. Taaffe, A.M. Dietrich, A. Joseph (In preparation). Analyzing Risk of Recidivism for Mental and Behavioral Health Patients: Grouping by ICD-10 Codes Using Big Data Analytics.
                <em>Planned for submission (undecided).</em>
              </li>
              <li><strong>S.N. Koscelny</strong>, D.M. Neyens, F. Zeinali, K. Taaffe, A.M. Dietrich, A. Joseph (In preparation). Time Series Analysis of ED Intervention for Mental and Behavioral Health Pediatric Patients.
                <em>Planned for submission (undecided).</em>
              </li>
            </ul>
          </div>

          {/* Conference Papers */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Conference Papers</h2>
            <h3 className="text-2xl font-bold mb-2">Published Conference Proceedings</h3>
            <ul className="list-disc pl-5 space-y-4">
              <li><strong>Koscelny, S. N.</strong>, & D.M. Neyens (2024). The Effect of Healthcare Chatbots’ Information Presentation Styles on User Acceptance in a Knowledge Seeking Task. Proceedings of the 2024 Human Factors and Ergonomics Society Annual Meeting.
                <em><u>(Sue Bogner Student Paper Award, Third Place).</u></em>
              </li>
            </ul>
            <h3 className="text-2xl font-bold mb-2 mt-8">Conference Papers in Preparation</h3>
            <ul className="list-disc pl-5 space-y-4">
              <li>Zeinali F., <strong>S.N. Koscelny</strong>, K. Taaffe, D.M. Neyens, A. Joseph. A.M. Dietrich. Evaluating Patient Care Pathways in the Emergency Department and Their Impact on Pediatric Mental and Behavioral Health Outcome.
                <em>Planned for submission to the 2025 Healthcare Systems Process Improvement Conference.</em>
              </li>
            </ul>
          </div>

          {/* Posters and Presentations */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Posters and Presentations</h2>
            <h3 className="text-2xl font-bold mb-2">Poster Presentations</h3>
            <ul className="list-disc pl-5 space-y-4">
              <li><strong>Koscelny, S.N.</strong>, Sadralashrafi, S., Neyens, D.M. (2024). Conceptualizing Processing Fluency Bias in Healthcare Chatbot Information Presentation: An Inductive Thematic Analysis of User Experience and Perceptions. Poster presented at Clemson University, Department of Industrial Engineering.</li>
              <li><strong>Koscelny, S.N.</strong>, Neyens, D.M. (2024). Factors Impacting the Time to Disposition for Pediatric Mental and Behavioral Health Emergency Department Visits. Poster presented at Clemson University, Department of Industrial Engineering.</li>
              <li><strong>Koscelny, S.N.</strong>, Nare, M.T., Dowers, K., Jurewicz, K.A. (2022). Exploring the Capabilities of Input and Output Modalities for Natural User Interfaces Used in Human-Computer Interaction. Poster presented at the 2022 Institute of Industrial and Systems Engineering Annual Conference, Seattle, Washington, May 2022.</li>
            </ul>
            <h3 className="text-2xl font-bold mb-2 mt-8">Conference Presentations</h3>
            <ul className="list-disc pl-5 space-y-4">
              <li><strong>Koscelny, S.N.</strong>, Jurewicz, K.A. (2022). Investigating the Effect of Primary Verbal Language on Intuitive Gesture Interaction in 3D Gesture Recognition Systems. Presented at the 2022 Institute of Industrial and Systems Engineering Annual Conference, Seattle, Washington, May 2022.</li>
              <li><strong>Koscelny, S.N.</strong>, Dowers, K. Chenang L. (2022). Stroke Prediction Using Machine Learning and Its Importance in Healthcare Systems. Presented at the Technical Paper Competition, 2022 Institute of Industrial and Systems Engineering South Central Regional Conference, Stillwater, Oklahoma, February 2022.
                <em><u>(Awarded Third Place).</u></em>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#A8AB9B] text-black py-4 text-center">
        <p>&copy; Created & designed by Sam Koscelny</p>
      </footer>
    </div>
  );
};

export default PublicationsPage;
