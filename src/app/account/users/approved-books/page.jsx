"use client";
import { Avatar, Badge, Button, Popover, Spinner, Table } from "keep-react";
import { DotsThreeOutline, Pencil, Trash } from "phosphor-react";
import { BiDetail } from "react-icons/bi";

import { useGetSingleUserApplyBooksQuery } from "@/redux/features/user-apply-books/userbooksAPI";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/AuthProvider/AuthProvider";

const Page = () => {
  const { user } = useContext(GlobalContext);

  const [data, setData] = useState({ status: true, email: user?.email });

  const {
    data: getAllApply,
    isLoading,
    refetch,
  } = useGetSingleUserApplyBooksQuery(data);

  useEffect(() => {
    if (user) {
      setData({ status: true, email: user?.email });
      refetch();
    }
  }, [user, refetch]);

  console.log(data);
  console.log(getAllApply);
  //  crate context
  let content;
  // sat loading
  if (isLoading)
    content = (
      <div className=" flex justify-center items-center min-h-[400px]">
        <Button type="" size="md">
          <span className="pr-2">
            <Spinner color="info" size="md" />
          </span>
          Loading...
        </Button>
      </div>
    );

  if (getAllApply)
    content = (
      <div>
        <Table showCheckbox={false}>
          <Table.Caption>
            <div className="my-5 flex items-center justify-between  px-2 lg:px-6">
              <div className="flex items-center gap-5">
                <p className="text-body-1 font-semibold text-metal-600">
                  Approved books
                </p>
                <Badge size="xs" colorType="light" color="gray">
                  {getAllApply?.data?.length}
                </Badge>
              </div>
            </div>
          </Table.Caption>

          <Table.Head>
            <Table.HeadCell className="min-w-[290px]">
              <p className="text-body-6 font-medium text-metal-400">Books</p>
            </Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Member</Table.HeadCell>

            <Table.HeadCell className="min-w-[240px]">
              Writer Name
            </Table.HeadCell>
            <Table.HeadCell className="min-w-[152px]">Status</Table.HeadCell>
            <Table.HeadCell className="min-w-[152px]">Action</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-gray-25 divide-y">
            {getAllApply?.data?.map((book) => (
              <Table.Row key={book?._id} className="bg-white">
                <Table.Cell>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Avatar
                          shape="circle"
                          img={book?.book?.image1}
                          size="md"
                        />
                        <div>
                          <p className="-mb-0.5 text-body-4 font-medium text-metal-600 capitalize">
                            {" "}
                            {book?.book?.name}{" "}
                          </p>
                          <span> {book?.book?.department} </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <p> {book?.book?.category} </p>
                </Table.Cell>
                <Table.Cell>
                  {" "}
                  <span className=" capitalize"> {book?.user?.name} </span>{" "}
                </Table.Cell>
                <Table.Cell>
                  {" "}
                  <span className=" capitalize">
                    {book?.book?.writer_name}
                  </span>{" "}
                </Table.Cell>
                <Table.Cell>
                  <span className=" bg-secondary  capitalize text-white px-2 py-[2px] rounded-[5px]">
                    Approved{" "}
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Popover
                    showDismissIcon={false}
                    showArrow={false}
                    className="w-52 border border-metal-100 p-2"
                  >
                    <Popover.Container className="!mt-0 !block">
                      <ul>
                        <li className="rounded px-2 py-1 hover:bg-metal-100">
                          <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                            <span>Delete</span>
                            <span>
                              <Trash />
                            </span>
                          </button>
                        </li>
                        <li className="rounded px-2 py-1 hover:bg-metal-100">
                          <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                            <span>Details</span>
                            <span>
                              <BiDetail />
                            </span>
                          </button>
                        </li>
                      </ul>
                    </Popover.Container>
                    <Popover.Action>
                      <Button type="outlineGray" size="xs" circle={true}>
                        <DotsThreeOutline
                          size={14}
                          color="#5E718D"
                          weight="bold"
                        />
                      </Button>
                    </Popover.Action>
                  </Popover>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  return <div>{content}</div>;
};

export default Page;
