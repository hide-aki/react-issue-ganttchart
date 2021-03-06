import moment from 'moment';

export const isValidVariable = (variable) => {
  if (variable !== null && variable !== [] && variable !== void 0 && variable !== "") {
    return true;
  }
  if (Array.isArray(variable)) {
    return variable.length > 0;
  }
  return false;
}

export const validVariable = (variable) => {
  if (isValidVariable(variable)) {
    return variable;
  } else {
    return "";
  }
}
export const isValidIDName = (id_name) => {
  return isValidVariable(id_name) && 'id' in id_name && 'name' in id_name;
}

const calculateDuration = (start_date, due_date) => {
  const start_date_moment = moment(start_date);
  const due_date_moment = moment(due_date);
  return due_date_moment.diff(start_date_moment, 'days') + 1;
}

export const calculateDueDate = (start_date_str, duration) => {
  const start_date = new Date(start_date_str);
  const due_date = moment(start_date).add(duration - 1, 'd').toDate();
  return due_date.toLocaleDateString("ja-JP");
}

export const getGanttStartDate = (start_date, due_date, created_at) => {
  let start_date_str = null;
  if (start_date != null && due_date != null) {
    start_date_str = start_date.toLocaleDateString("ja-JP");
  } else {
    start_date_str = new Date(created_at).toLocaleDateString("ja-JP");
  }
  return start_date_str;
}

export const getGanttDueDate = (start_date, due_date, created_at) => {
  let due_date_str = null;
  if (start_date != null && due_date != null) {
    due_date_str = new Date(due_date);
  } else {
    due_date_str = new Date(created_at);
  }
  return due_date_str;
}

export const getGanttDuration = (start_date, due_date) => {
  let duration = null;
  if (start_date != null && due_date != null) {
    duration = calculateDuration(start_date, due_date);
  } else {
    duration = 1;
  }
  return duration;
}

export const updateGanttIssue = (issue, gantt_parse) => {
  let data = [];
  let links = [];
  data.push(issue);
  data = { data: data, links: links }
  gantt_parse(data);
} 