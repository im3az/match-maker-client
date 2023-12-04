import { useQuery } from "react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Button, Table } from "flowbite-react";
import { MdWorkspacePremium } from "react-icons/md";
import Swal from "sweetalert2";

const ApprovePremium = () => {
  const axiosSecure = useAxiosSecure();

  const { data: premiumRequests = [], refetch } = useQuery({
    queryKey: ["premiumRequests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/premiumRequests");
      return res.data;
    },
  });

  const handleMakePremium = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make premium!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/premium/${user._id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                icon: "success",
                title: `${user.name} is now a premium member.`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => console.log(error));

        axiosSecure
          .patch(`/biodata/premium/${user.email}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
              refetch();
              console.log("Biodata made premium");
            }
          })
          .catch((error) => console.log(error));

        //
      }
    });
  };

  return (
    <div className="overflow-x-auto my-4 w-full">
      <Table>
        <Table.Head>
          <Table.HeadCell>User name</Table.HeadCell>
          <Table.HeadCell>User email</Table.HeadCell>
          {/* <Table.HeadCell>Role</Table.HeadCell> */}
          <Table.HeadCell>Make premium</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {premiumRequests.map((user) => (
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
                {user?.role === "premium" ? (
                  <>
                    <h2>Premium member</h2>
                  </>
                ) : (
                  <>
                    <Button
                      className="w-full"
                      onClick={() => handleMakePremium(user)}
                    >
                      <MdWorkspacePremium className="text-white text-lg" />
                    </Button>
                  </>
                )}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ApprovePremium;
