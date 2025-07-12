// Data of Employees
const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare weekly report",
        description: "Collect and summarize sales data for weekly review.",
        date: "2025-07-10",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client follow-up",
        description: "Follow up with client about project proposal.",
        date: "2025-07-08",
        category: "Communication"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Team meeting",
        description: "Attend daily sync-up with the team.",
        date: "2025-07-12",
        category: "Meetings"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Code review",
        description: "Review code submitted by peers.",
        date: "2025-07-11",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deploy backend update",
        description: "Update server with new backend code.",
        date: "2025-07-09",
        category: "Deployment"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Write unit tests",
        description: "Add test cases for new module.",
        date: "2025-07-06",
        category: "Testing"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Research API integration",
        description: "Investigate third-party APIs for payment processing.",
        date: "2025-07-12",
        category: "Research"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Write blog post",
        description: "Create blog content for product release.",
        date: "2025-07-04",
        category: "Content"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Fix UI bugs",
        description: "Resolve UI issues reported by QA.",
        date: "2025-07-12",
        category: "Bug Fixing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Update documentation",
        description: "Revise internal documentation for recent updates.",
        date: "2025-07-11",
        category: "Documentation"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Data cleanup",
        description: "Organize and clean old data from database.",
        date: "2025-07-12",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Create wireframes",
        description: "Design UI wireframes for new dashboard.",
        date: "2025-07-07",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Send invoices",
        description: "Dispatch monthly invoices to clients.",
        date: "2025-07-05",
        category: "Finance"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Schedule interviews",
        description: "Arrange interviews for developer candidates.",
        date: "2025-07-12",
        category: "HR"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Update CRM",
        description: "Log recent client interactions into CRM.",
        date: "2025-07-12",
        category: "CRM"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Optimize images",
        description: "Compress and optimize images on website.",
        date: "2025-07-09",
        category: "Performance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix SEO issues",
        description: "Resolve technical SEO problems.",
        date: "2025-07-07",
        category: "SEO"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create analytics dashboard",
        description: "Develop a real-time analytics view for admin.",
        date: "2025-07-12",
        category: "Analytics"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Test payment gateway",
        description: "Run test transactions on Stripe sandbox.",
        date: "2025-07-12",
        category: "Payment"
      }
    ]
  }
];
// Data of Admin
const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];
// Setting data of employee and admin in localStorage
export const setLocalStorage=()=>{
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}
// Setting data of employee and admin in localStorage
export const getLocalStorage=()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  console.log(employees,admin)
}