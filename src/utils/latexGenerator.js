
export const generate_latex_code = (resumeData) => {
  const { personalInformation, education, workExperience, skills, projects } = resumeData;
  const { name, email, phone } = personalInformation;


    let latex_code = `
  \\documentclass[a4paper,10pt]{article}
  \\usepackage[utf8]{inputenc}
  \\usepackage{enumitem}
  \\usepackage[top=1in, bottom=1in, left=1in, right=1in]{geometry}
  
  \\begin{document}
  \\pagestyle{empty} % Removes page number
  
  \\begin{center}
      \\textbf{\\LARGE ${resumeData.personalInformation.name}} \\\\
      ${resumeData.personalInformation.address} \\\\
      ${resumeData.personalInformation.email} | ${resumeData.personalInformation.phone}
  \\end{center}
  `;
  
    latex_code += "\\section*{Education}\n";
    resumeData.education.forEach(education => {
      latex_code += `\\textbf{${education.degree}} - ${education.institution} \\\\
  ${education.graduationDate} \\\\
  `;
    });
  
    latex_code += "\\section*{Work Experience}\n";
    resumeData.workExperience.forEach(experience => {
      latex_code += `\\textbf{${experience.jobTitle}} - ${experience.company} \\\\
  ${experience.startDate} - ${experience.endDate} \\\\
  ${experience.responsibilities}
  `;
    });
  
    latex_code += "\\section*{Skills}\n";
    latex_code += resumeData.skills.join(', ') + "\n";
  
    latex_code += "\\section*{Projects}\n";
    resumeData.projects.forEach(project => {
      latex_code += `\\textbf{${project.name}} \\\\
  ${project.description} \\\\
  Technologies: ${project.technologies} \\\\
  Role: ${project.role} | Duration: ${project.duration} \\\\
  `;
    });
  
    latex_code += "\\end{document}";
  
    return latex_code;
  };
  