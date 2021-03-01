export const roles = [
  { 
    value: 'company',
    text: 'COMPANY'
  },
  { 
    value: 'customer',
    text: 'CUSTOMER'
  },
];

export const getPermission = (role, target) => {
  const roleConfig = [
    {
      role: 'company',
      target: [
        'ADMIN_COMPANY',
        'EDIT_VINES',
      ],
    },
    {
      role: 'customer',
      target: [],
    },
  ];

  const roleData = roleConfig.filter((roleItem) => ((roleItem.role === role) && (roleItem.target.includes(target))));
  if (roleData.length > 0) {
    return true;
  }
  return false;
};

export const getRolePermission = () => {
  return decode(localStorage.getItem('role'));
};

export const getSection = (project_id) => {
	if (projectData.projects) {
		const project = projectData.projects.find((project) => {
			return project.project_id === project_id;
		});
		if (typeof project !== 'undefined') {
			const assigneeRoleChangedAllPhases = (typeof project === 'undefined') ? [] : changeAssigneeToRoleFromProject(project);
			project.phases = assigneeRoleChangedAllPhases;
		}
		return project;
	}
	return null;
};