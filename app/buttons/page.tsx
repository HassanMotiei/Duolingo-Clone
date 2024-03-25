import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="flex flex-col gap-2 ml-5 mt-10 max-w-[200px]">
			<Button size={"lg"}>Default</Button>
			<Button size={"lg"} variant={"primary"}>
				Primary
			</Button>
			<Button size={"lg"} variant={"primaryOutline"}>
				Primary Outline
			</Button>
			<Button size={"lg"} variant={"secondary"}>
				Secondary
			</Button>
			<Button size={"lg"} variant={"secondaryOutline"}>
				Secondary Outline
			</Button>
			<Button size={"lg"} variant={"danger"}>
				Danger
			</Button>
			<Button size={"lg"} variant={"dangerOutline"}>
				Danger Outline
			</Button>
			<Button size={"lg"} variant={"super"}>
				Super
			</Button>
			<Button size={"lg"} variant={"superOutline"}>
				Super Outline
			</Button>
			<Button size={"lg"} variant={"ghost"}>
				Ghost
			</Button>
			<Button size={"lg"} variant={"sidebar"}>
				Sidebar
			</Button>
			<Button size={"lg"} variant={"sidebarOutline"}>
				Sidebar Outline
			</Button>
		</div>
	);
}
