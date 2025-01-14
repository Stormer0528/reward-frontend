import { gql } from 'src/__generated__';

export const FETCH_EMAILS_QUERY = gql(/* GraphQL */ `
  query Emails($sort: String, $page: String, $filter: JSONObject) {
    emails(sort: $sort, page: $page, filter: $filter) {
      emails {
        id
        to
        body
        subject
        isDraft
        senderId
        isDeleted
        updatedAt
        sender {
          id
          email
          point
          mobile
          status
          username
          fullName
          groupName
          teamReport
          teamStrategy
          syncWithSendy
          emailVerified
          primaryAddress
          totalIntroducers
          placementPosition
          cmnCalculatedWeeks
        }
        files {
          id
          url
          size
          mimeType
          originalName
        }
      }
      total
    }
  }
`);

export const FETCH_RECIPIENTS_QUERY = gql(/* GraphQL */ `
  query Recipients($sort: String, $page: String, $filter: JSONObject) {
    recipients(sort: $sort, page: $page, filter: $filter) {
      recipients {
        updatedAt
        id
        emailId
        recipientId
        isRead
        isDeleted
        isStarred
        email {
          id
          to
          body
          subject
          isDraft
          senderId
          isDeleted
          updatedAt
          sender {
            id
            email
            point
            mobile
            status
            username
            fullName
            groupName
            teamReport
            teamStrategy
            syncWithSendy
            emailVerified
            primaryAddress
            totalIntroducers
            placementPosition
            cmnCalculatedWeeks
          }
          files {
            id
            url
            size
            mimeType
            originalName
          }
        }
        recipient {
          id
          email
          point
          mobile
          status
          username
          fullName
          groupName
          teamReport
          teamStrategy
          syncWithSendy
          emailVerified
          primaryAddress
          totalIntroducers
          placementPosition
          cmnCalculatedWeeks
        }
      }
      total
    }
  }
`);

export const FETCH_TEAM_MEMBER_QUERY = gql(/* GraphQL */ `
  query TeamMembers {
    teamMembers {
      id
      email
      point
      mobile
      status
      username
      fullName
      groupName
      teamReport
      teamStrategy
      syncWithSendy
      emailVerified
      primaryAddress
      totalIntroducers
      placementPosition
      cmnCalculatedWeeks
    }
  }
`);

export const FETCH_EMAILBYID_QUERY = gql(/* GraphQL */ `
  query EmailById($data: IDInput!) {
    emailById(data: $data) {
      id
      to
      body
      subject
      isDraft
      senderId
      isDeleted
      updatedAt
      sender {
        id
        email
        point
        mobile
        status
        username
        fullName
        groupName
        teamReport
        teamStrategy
        syncWithSendy
        emailVerified
        primaryAddress
        totalIntroducers
        placementPosition
        cmnCalculatedWeeks
      }
      files {
        id
        url
        size
        mimeType
        originalName
      }
    }
  }
`);

export const FETCH_RECIPIENTBYID_QUERY = gql(/* GraphQL */ `
  query RecipientById($data: IDInput!) {
    recipientById(data: $data) {
      createdAt
      updatedAt
      deletedAt
      id
      emailId
      recipientId
      isRead
      isDeleted
      isStarred
      email {
        id
        to
        body
        subject
        isDraft
        senderId
        isDeleted
        updatedAt
        sender {
          id
          email
          point
          mobile
          status
          username
          fullName
          groupName
          teamReport
          teamStrategy
          syncWithSendy
          emailVerified
          primaryAddress
          totalIntroducers
          placementPosition
          cmnCalculatedWeeks
        }
        files {
          id
          url
          size
          mimeType
          originalName
        }
      }
      recipient {
        id
        email
        point
        mobile
        status
        username
        fullName
        groupName
        teamReport
        teamStrategy
        syncWithSendy
        emailVerified
        primaryAddress
        totalIntroducers
        placementPosition
        cmnCalculatedWeeks
      }
    }
  }
`);

export const CREATE_EMAIL = gql(/* GraphQL */ `
  mutation CreateEmail($data: CreateEmailInput!) {
    createEmail(data: $data) {
      id
    }
  }
`);

export const UPDATE_EMAIL = gql(/* GraphQL */ `
  mutation UpdateEmail($data: UpdateEmailInput!) {
    updateEmail(data: $data) {
      id
    }
  }
`);

export const REMOVE_EMAIL = gql(/* GraphQL */ `
  mutation RemoveEmail($data: IDInput!) {
    removeEmail(data: $data) {
      id
    }
  }
`);

export const SEND_EMAIL = gql(/* GraphQL */ `
  mutation SendEmail($data: IDInput!) {
    sendEmail(data: $data) {
      message
      result
    }
  }
`);

export const SET_RECIPIENT_STATUS = gql(/* GraphQL */ `
  mutation SetRecipientStatus($data: EmailStatusInput!) {
    setRecipientStatus(data: $data) {
      id
    }
  }
`);

export const MOVE_EMAIL_TRASH = gql(/* GraphQL */ `
  mutation MoveEmailToTrash($data: IDInput!) {
    moveEmailToTrash(data: $data) {
      id
    }
  }
`);
