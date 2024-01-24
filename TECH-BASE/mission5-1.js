document.addEventListener('DOMContentLoaded', function () {
  var today = new Date();
  var currentMonth = today.getMonth();
  var currentYear = today.getFullYear();

  function generateCalendar(month, year) {
    var calendarDiv = document.getElementById('calendar');
    calendarDiv.innerHTML = ''; // 

    var daysInMonth = new Date(year, month + 1, 0).getDate();
    var firstDay = new Date(year, month, 1).getDay();

    var table = document.createElement('table');
    var headerRow = document.createElement('tr');

    var daysOfWeek = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];
    for (var day of daysOfWeek) {
      var th = document.createElement('th');
      th.textContent = day;
      headerRow.appendChild(th);
    }

    table.appendChild(headerRow);

    var date = 1;
    for (var i = 0; i < 6; i++) {
      var row = document.createElement('tr');
      for (var j = 0; j < 7; j++) {
        var cell = document.createElement('td');
        if ((i === 0 && j < firstDay) || date > daysInMonth) {
          cell.textContent = '';
        } else {
          cell.textContent = date;
          if (j === 0) {
            cell.style.backgroundColor = '#FF0000';
          } else if (j === 6) {
            cell.style.backgroundColor = '#0000FF';
          }
          if (date === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            cell.style.backgroundColor = '#87CEFA';
          }
          date++;
        }
        row.appendChild(cell);
      }
      table.appendChild(row);
    }

    calendarDiv.appendChild(table);
  }

  generateCalendar(currentMonth, currentYear);

  document.addEventListener('click', function (event) {
    if (event.target.id === 'prevMonth') {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
    } else if (event.target.id === 'nextMonth') {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
    }

    generateCalendar(currentMonth, currentYear);
  });

});