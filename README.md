# My first REACT project!!

Check out the [**Cool-Workplace**](https://nmwolfe.github.io/cool-workplace/#/) here.

![ticket-tracker-1](https://github.com/nmWolfe/cool-workplace/assets/125403716/a4ccbf47-a0ce-4d58-bcb2-dbce3f463ac4)

## The brief

Tasked with creating a ticket-tracking system for the workplace, where each employee (from a data file) should be able to increment/decrement their ticket count. Once this was completed, an extension of the task was to have additional search options, by employee name, or occupation. As a final extension, the task was to use React Routing to make a single page into three, having the option to _learn_ a bit more about each employee with a specific profile page using react Query Params.

- The Home page will display all of the team member's names
- The Tickets page will display the ticket tracker with all the team members
- The Profile page will be accessible by clicking on a team members ticket on the ticket page, or on their name on the Home page.
  - I implemented a name carousel on the profile page, also giving the option to view further information.
- Navigation is essential between these two pages.

## The Requirements

1 A Ticket Tracker

- Keep a count of all tickets completed by individual employees
- Display all employees in one place

2 An Extended Ticket tracker

- Add a search by name option.
  - This was implemented using a filter, with an input box.
- Add a search by role option.
  - This was implemented using a ~select~ drop-down box.

3 Using Routing, create separate pages for:

- Home
- Profile
- Tickets

## The Stack

For this project I used SCSS, TypeScript and the React Library.

## Challenges

My first challenge came with separating the 'state' for each employee. Initially I rendered each 'employee card' with everything needed - information, styling and state. This caused the 'tracker' to update all counters at the same time.
The trick was to create a separate card for the counter, and add the counter-card into the employee-card.

```const EmployeeCard = ({ employees }: EmployeeCardProps) => {
  return (
    <>
      {employees.map((employee) => (
        <div key={employee.id} className="employee-card">
          <Link to={`/profiles/${employee.id}`} className="employee-card__link">
            <h3 className="employee-card__name">{employee.name}</h3>
          </Link>
          <h3 className="employee-card__role">{employee.role}</h3>
          <CounterCard />
        </div>
      ))}
    </>
  );
};
```

- This caused a separate issue when the final extension of the challenge was added, as it made the employee card less re-usable than I would have liked.

The second challenge I faced was rendering the extra data received for the extension. Having to parse the data lead me to creating more links to the same place than I would have liked to do.

- Given the opportunity to re-do this project, I would separate the employee card further, allowing it to be re-used in the subsequent profile and home pages.

## Can I run this locally?

Yes! If you want to clone down the repo, please do! You'll need to have a development server, in which running your <sub>(insert package manager here)</sub> run dev will give you access to a locally hosted version of the webpage.
