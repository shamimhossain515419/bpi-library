"use client";
import Image from "next/image";
import { Avatar, Badge, Button, Popover, Table } from "keep-react";
import { ArrowDown, DotsThreeOutline, Pencil, Trash } from "phosphor-react";

import { useGetAllUsersQuery } from "@/redux/features/users/userApi";
export const TableComponent = () => {
  const { data: allUser, isLoading, error } = useGetAllUsersQuery();

  return (
    <Table showCheckbox={false}>
      <Table.Caption>
        <div className="my-5 flex items-center justify-between px-6">
          <div className="flex items-center gap-5">
            <p className="text-body-1 font-semibold text-metal-600">
              All Users
            </p>
            <Badge size="xs" colorType="light" color="gray">
              {allUser?.data?.length} Member
            </Badge>
          </div>
        </div>
      </Table.Caption>
      <Table.Head>
        <Table.HeadCell className="min-w-[290px]">
          <p className="text-body-6 font-medium text-metal-400">Type</p>
        </Table.HeadCell>
        <Table.HeadCell>Status</Table.HeadCell>
        <Table.HeadCell className="min-w-[152px]">Role</Table.HeadCell>
        <Table.HeadCell className="min-w-[240px]">Email Address</Table.HeadCell>
        <Table.HeadCell className="min-w-[215px]">Roll Number</Table.HeadCell>
        <Table.HeadCell className="min-w-[200px]">Performance</Table.HeadCell>
        <Table.HeadCell className="min-w-[100px]" />
      </Table.Head>
      <Table.Body className="divide-gray-25 divide-y">
        {allUser?.data?.map((user) => (
          <Table.Row key={user?._id} className="bg-white">
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar shape="circle" img={user?.photo} size="md" />
                    <div>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600 capitalize">
                        {" "}
                        {user?.name}{" "}
                      </p>
                      <span> {user?.department?.slice(0, 5)} </span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <Badge colorType="light" color="success" dot={true}>
                Active
              </Badge>
            </Table.Cell>
            <Table.Cell>
              <p> {user?.isRole ? user?.isRole : "Student"} </p>
            </Table.Cell>
            <Table.Cell> {user?.email} </Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-1">
                <Badge colorType="light" color="info">
                  {user?.roll ? user?.roll : "Not set use roll"}
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div>
                  <Image
                    src="/images/icon/Series.png"
                    width={72}
                    height={36}
                    alt="line"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <span>
                    <ArrowDown size={20} color="#D7DFE9" />
                  </span>
                  <span>20%</span>
                </div>
              </div>
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
                        <span>Edit</span>
                        <span>
                          <Pencil />
                        </span>
                      </button>
                    </li>
                  </ul>
                </Popover.Container>
                <Popover.Action>
                  <Button type="outlineGray" size="xs" circle={true}>
                    <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                  </Button>
                </Popover.Action>
              </Popover>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
