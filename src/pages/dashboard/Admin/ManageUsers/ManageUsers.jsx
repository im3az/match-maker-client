import { useQuery } from "react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Button, Table } from "flowbite-react";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/admin/${user._id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                icon: "success",
                title: `${user.name} is now an admin.`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => console.log(error));

        //
      }
    });
  };

  return (
    <div>
      {/* <h2>Manage Users: {users.length}</h2> */}
      <div className="overflow-x-auto my-4 w-full">
        <Table>
          <Table.Head>
            <Table.HeadCell>User name</Table.HeadCell>
            <Table.HeadCell>User email</Table.HeadCell>
            {/* <Table.HeadCell>Role</Table.HeadCell> */}
            <Table.HeadCell>Make admin</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {users.map((user) => (
              <Table.Row
                key={user._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {user?.name}
                </Table.Cell>
                <Table.Cell>{user?.email}</Table.Cell>
                {/* <Table.Cell>Laptop</Table.Cell> */}
                <Table.Cell>
                  {user?.role === "admin" ? (
                    <>
                      <h2>Admin</h2>
                    </>
                  ) : (
                    <>
                      <Button onClick={() => handleMakeAdmin(user)}>
                        <FaUsers className="text-white" />
                      </Button>
                    </>
                  )}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default ManageUsers;
