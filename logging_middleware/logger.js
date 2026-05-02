const axios = require("axios");

const log = async (stack, level, pkg, message) => {
    try {
        await axios.post(
            "http://20.207.122.201/evaluation-service/logs",
            {
                stack,
                level,
                package: pkg,
                message
            },
            {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhczA0MjdAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwMDU1MCwiaWF0IjoxNzc3Njk5NjUwLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiY2Y3MGE1MzItZThjZC00NWM3LThjMzItYjdmZTY3ZjE5NmEzIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiYWtzaGF0IGhlbWFsIHNoYWgiLCJzdWIiOiIzYWY5NzNkNS05ZWY3LTQxNzUtOTMzMC04MWZmZWQ5ODIxMGQifSwiZW1haWwiOiJhczA0MjdAc3JtaXN0LmVkdS5pbiIsIm5hbWUiOiJha3NoYXQgaGVtYWwgc2hhaCIsInJvbGxObyI6InJhMjMxMTA0MzAxMDA2NiIsImFjY2Vzc0NvZGUiOiJRa2JweEgiLCJjbGllbnRJRCI6IjNhZjk3M2Q1LTllZjctNDE3NS05MzMwLTgxZmZlZDk4MjEwZCIsImNsaWVudFNlY3JldCI6Imh0Y2hXc0VUZmVYQ2JXQ1oifQ.d1mIX0_9KuYq5j6GhfpU-IZiIa3nTiG5VMGdzeeHK2g`
                }
            }
        );
    } catch (err) {
        console.error("Logging failed");
    }
};

module.exports = log;
