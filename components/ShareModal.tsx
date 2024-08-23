"use client";

import React, { useState } from "react";
import { useSelf } from "@liveblocks/react/suspense";

const ShareModal = ({
  roomId,
  collaborators,
  creatorId,
  currentUserType,
}: ShareDocumentDialogProps) => {
  const user = useSelf();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState<UserType>("viewer");
  return <div>ShareModel</div>;
};
const shareDocumentHandler = async () => {
  // setLoading(true);
  // await updateDocumentAccess({
  //   roomId,
  //   email,
  //   userType: userType as UserType,
  //   updatedBy: user.info,
  // });
  // setLoading(false);
};
export default ShareModal;
