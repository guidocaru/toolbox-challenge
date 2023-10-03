export const handleResponse = (response) => response?.data || null;

export const handleError = (error) => {
  if (error.response) {
    return null;
  }

  if (error.request) {
    return { error: "No response received from the server." };
  }

  return { error: "Request setup error: " + error.message };
};
