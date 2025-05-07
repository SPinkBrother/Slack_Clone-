interface WorkSpaceIdPageProps{
    params: {
        workspaceId: string;
    };
}


const WorkspaceIdPage = ({params} : WorkSpaceIdPageProps) => {
    return(
        <div>
            ID: {params.workspaceId}
        </div>
    );
}

export default WorkspaceIdPage;